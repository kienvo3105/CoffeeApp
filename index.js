/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import messaging from '@react-native-firebase/messaging';
import notifee, {
    EventType,
    AndroidImportance,
    TriggerType,
    Trigger,
    AndroidStyle
} from '@notifee/react-native';
var EventEmitter = require('eventemitter3');

import { PermissionsAndroid } from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export const eventEmitter = new EventEmitter();

const onMessageReceived = async message => {
    await notifee.requestPermission()
    const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
    });
    const notification = JSON.parse(message.data.notifee);
    await notifee.displayNotification({
        title: notification.title,
        body: notification.body,
        android: {
            channelId: channelId,
            // style: { type: AndroidStyle.BIGTEXT, text: 'Bạn có bài viết mới' },
            smallIcon: 'ic_launcher',
        },
        // pressAction: {
        //     id: 'default',
        // },
    });
};

messaging().setBackgroundMessageHandler(onMessageReceived);
messaging().onMessage(onMessageReceived);

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    // Check if the user pressed the "Mark as read" action

    if (type === EventType.PRESS) {
        // Update external API

        eventEmitter.emit('notificationReceived', notification);

        // Remove the notification
        await notifee.cancelNotification(notification.id);
    }
});

notifee.onForegroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;

    if (type === EventType.PRESS) {
        eventEmitter.emit('notificationReceived', notification);

        await notifee.cancelNotification(notification.id);
    }
});
AppRegistry.registerComponent(appName, () => App);

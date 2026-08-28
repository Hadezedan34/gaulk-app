import 'react-native-url-polyfill/auto';
import { Client, Account, Databases ,Avatars } from 'react-native-appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') 
    .setProject('6a89bc810015b4370bb7')
    .setPlatform('dev.klazlabs.gaulk'); 

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client); 
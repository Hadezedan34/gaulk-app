import { StyleSheet, Text, View ,useColorScheme} from 'react-native'
import { Tabs } from "expo-router"
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import UserOnly from '../../components/auth/UserOnly';
import { BooksContext, BooksProvider } from '../../contexts/BooksContext';
const dashboardlayout = () => {
        const colorscheme = useColorScheme()
        const theme = Colors[colorscheme] ?? Colors.dark
       
        
        
  return (
   
<BooksProvider>
<UserOnly>
   <Tabs screenOptions={{
                headerShown: false,
                animation: 'none' , tabBarStyle:
                {backgroundColor:theme.navBackground , paddingTop:14 , height:75},
                tabBarActiveTintColor:theme.iconColorFocused,
                tabBarInactiveTintColor:theme.iconColor
            }}>
                <Tabs.Screen name="profile" options={{title:'Profile' , tabBarIcon: ({focused}) => 
                (
                    <Ionicons size={24} name={focused ? "person" : "person-outline" } color={focused ? theme.iconColor :theme.iconColorFocused } />
                )

               
                }}/>
                <Tabs.Screen name="create" options={{title:'Create',tabBarIcon: ({focused}) => 
                (
                  <Ionicons size={24} name={focused ? "create" : "create-outline" } color={focused ? theme.iconColor :theme.iconColorFocused } />
                )}}/>
                

                <Tabs.Screen name="books" options={{title:'Books' , tabBarIcon:({focused}) => (
                    <Ionicons size={24} name={focused ? "book" : "book-outline" } color={focused ? theme.iconColor :theme.iconColorFocused } />
                )
                }}/>
                 <Tabs.Screen name="bookinfo" options={{href:null, title:'bookDetails'}}
                
                />

    </Tabs>
</UserOnly>
</BooksProvider>
    

  
  )
}

export default dashboardlayout
import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Home from '@screens/Home'

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.HOME} component={Home} />
        </Stack.Navigator>
    )
}
export default AuthNavigation

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../navigation-routes';
import Login from '@/features/authentication/containers/Login';
import ForgotPassword from '@/features/authentication/containers/ForgetPassword';
import {navigatorOptions as options} from '../navigation-action';
import UpdateApp from '@/components/UpdateAppVersion';
import {Endpoint} from 'screens/endpoint';
import {LostConnection} from '@/components';

const AuthStack = createStackNavigator();

export const AuthNavigator = (
  <>
    <AuthStack.Screen name={routes.LOGIN} component={Login} options={options} />
    <AuthStack.Screen
      name={routes.FORGOT_PASSWORD}
      component={ForgotPassword}
      options={options}
    />
    {/* Settings Navigator */}
    <AuthStack.Screen name={routes.UPDATE_APP_VERSION} component={UpdateApp} />
    <AuthStack.Screen
      name={routes.ENDPOINTS}
      component={Endpoint}
      options={options}
    />
    <AuthStack.Screen
      name={routes.LOST_CONNECTION}
      component={LostConnection}
      options={{gestureEnabled: false}}
    />
  </>
);

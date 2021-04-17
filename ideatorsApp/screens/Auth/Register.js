import {Formik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/authAction';
import {SafeAreaView, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {globalStyles} from '../../styles/global';
import Button from '../componets/core/Button';
import * as yup from 'yup';
import Loading from '../componets/shared/Loading';

const LoginSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required('No password provided.'),
});

const Login = () => {
  const {auth, loading} = useSelector(state => ({
    auth: state.auth,
    loading: state.loading,
  }));
  const dispatch = useDispatch();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView style={globalStyles.center}>
        <Formik
          initialValues={{name: null, email: null, password: null}}
          validationSchema={LoginSchema}
          onSubmit={async ({name, email, password}) => {
            console.log('User gave this: ', email, password);
            dispatch(register(name, email.toLowerCase(), password));
          }}>
          {({
            handleChange,
            values,
            handleBlur,
            touched,
            errors,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <View>
              <Input
                style={globalStyles.input}
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}
                onBlur={handleBlur('name')}
                errorMessage={touched.name && errors.name}
              />
              <Input
                style={globalStyles.input}
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                errorMessage={touched.email && errors.email}
              />
              <Input
                style={globalStyles.input}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur('password')}
                errorMessage={touched.password && errors.password}
              />
              <Button
                title="Register"
                onPress={handleSubmit}
                disabled={!isValid && dirty}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
};

export default Login;

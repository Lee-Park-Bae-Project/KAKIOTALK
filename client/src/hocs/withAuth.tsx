/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import request from 'common/request';
import { RouteComponentProps } from 'react-router';
import { AxiosError } from 'axios';

export interface WithAuthProps {
  name: string;
  email: string;
  uuid: string;
}

function withAuth<T extends WithAuthProps>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps) => {
    const [userInfo, setNewProps] = useState({
      name: '',
      email: '',
      uuid: '',
    });

    useEffect(() => {
      (async () => {
        request.getUserInfo()
          .then((response) => {
            const { name, email, uuid } = response.data.data.user;
            setNewProps({ name, email, uuid });
          })
          .catch((e: AxiosError) => {
            alert(e.response?.data.message);
            props.history.push('/login');
          });
      })();
    }, []);

    return (
      <Component
        {...props as T}
        {...userInfo}
      />
    );
  };
}
export default withAuth;

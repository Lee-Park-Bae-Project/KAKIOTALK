/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import request from 'common/request';
import { withRouter, RouteComponentProps } from 'react-router';
import { AxiosError } from 'axios';

export interface Props {
  name: string;
  email: string;
  uuid: string;
}

function withAuth<T extends Props>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps) => {
    const [newProps, setNewProps] = useState({
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
            // alert(e.response?.data.message);
            props.history.push('/login');
          });
      })();
    }, []);

    return (
      <Component
        {...props as T}
        {...newProps}
      />
    );
  };
}
export default withAuth;

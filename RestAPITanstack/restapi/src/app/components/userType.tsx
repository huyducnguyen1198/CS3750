"use client";

import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { db } from '../../lib/db';
import { FC } from 'react';
const host = 'localhost';
const port = '3000'
const api = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const getUserType = async () => {
    const url = `http://${host}:${port}/api/userType`
    const { data } = await axios.get(url)
    console.log(data)
    return data
};

interface UserTypeProps {
    userTypeName:string,
    userTypeDesc:string
}


export const UserType: FC = () => {

    const {data} = useQuery<UserTypeProps[]>({
        queryKey: ['get'],
        queryFn: getUserType,
    });
   
    return (
        <div>  
            {data?.map((userType:UserTypeProps) => (
                <div key={userType.userTypeName}>
                    <h2>{userType.userTypeName}</h2>
                    <p>{userType.userTypeDesc}</p>
                </div>       
                ))
            }
        </div>
    );
};
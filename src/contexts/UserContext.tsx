/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { ReactNode, createContext, useState } from 'react';

type UserContextType = {
  userId: number
  setUserId: (newState: number) => void
};

type UserContextProps = {
  children: ReactNode
};

const initialValues = {
  userId: 0,
  setUserId: () => {},
};

export const UserContext = createContext<UserContextType>(initialValues);

export function UserContextProvider({ children }: UserContextProps) {
  const [userId, setUserId] = useState(initialValues.userId);
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

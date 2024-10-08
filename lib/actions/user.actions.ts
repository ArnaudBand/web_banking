"use server";

import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: LoginUser) => {
  try {
    const {account} = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);
    return parseStringify(response);
  } catch (error) {
    console.log('Error', error)
  }
};

export const signUp = async (data: SignUpParams) => {
  const { email, password, firstName, lastName } = data;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.log("Error", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.log("Error", error);
    return null;
  }
}

export const logoutAccount = async () => {
  try {
    const {account} = await createSessionClient();
    cookies().delete('appwite-session');
    await account.deleteSession('current');
  } catch (error) {
    console.log('Error', error)
    return null;
  }
}

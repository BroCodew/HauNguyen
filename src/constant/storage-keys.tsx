const StorageKeys = {
  USER: "user",
  TOKEN: "access_token",
};

export default StorageKeys;

// class LocalStorageManager {
//   static StorageKeys = {
//     USER: "user",
//     TOKEN: "access_token",
//   };

//   static setUser(user: string | null) {
//     localStorage.setItem(LocalStorageManager.StorageKeys.USER, user || "");
//   }

//   static setToken(token: string | null) {
//     localStorage.setItem(LocalStorageManager.StorageKeys.TOKEN, token || "");
//   }

//   static getUser(): string | null {
//     const user = localStorage.getItem(LocalStorageManager.StorageKeys.USER);
//     return user !== null ? user : null;
//   }

//   static getToken(): string | null {
//     const token = localStorage.getItem(LocalStorageManager.StorageKeys.TOKEN);
//     return token !== null ? token : null;
//   }
// }

// export default LocalStorageManager;

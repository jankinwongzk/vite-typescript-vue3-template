import { defineStore } from 'pinia';
import pinia from '@/store';
import { userLogin } from '@/api/user';
// import router from '@/router';
export interface UserState {
    username: string;
    accessToken: string;
    refreshToken?: string;
    roles: Array<string>;
}
export const useUserStoreHook = defineStore('userInfo', {
    state: (): UserState => ({
        username: '大伟',
        accessToken: '',
        roles: ['common']
    }),
    getters: {},
    actions: {
        storeUserLogin(data) {
            return userLogin(data).then((res) => {
                this.username = res.data.username;
                this.roles = res.data.roles;
                this.accessToken = res.data.accessToken;
                return res;
            });
        }
        // stroeRefreshUserInfo() {
        //     if (this.username == '大伟' && this.accessToken != '') {
        //         refreshUserInfo({
        //             accessToken: this.accessToken
        //         })
        //             .then((res) => {
        //                 this.username = res.username;
        //                 this.roles = res.roles;
        //                 this.accessToken = res.accessToken;
        //             })
        //             .catch(() => {
        //                 this.accessToken = '';
        //             });
        //     }
        // }
    },
    persist: {
        key: 'userInfo',
        storage: sessionStorage,
        paths: ['accessToken']
    }
});
export function useUserStore() {
    return useUserStoreHook(pinia);
}

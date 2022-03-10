<template>
  <div>
    <button v-if="store.state.currentUser" @click="signout">サインアウト</button>
    <button v-if="!store.state.currentUser" @click="signin">サインイン</button>
    <q-layout view="hHh Lpr lff" container style="height: 1300px" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <NuxtLink :to="menuItem.to">
                <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
              </NuxtLink>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <NuxtPage />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import store from '@/store'
import identityManager from '@/identity-manager'

const router = useRouter()

const signout = () => {
  store.state.currentUser = null
  identityManager.clearCredentials()
  router.push({ name: 'signin' })
}
const signin = () => {
  router.push({ name: 'signin' })
}

const drawer = ref(false)
const menuList = [
  {
    icon: 'fa fa-home',
    label: 'home',
    separator: true,
    to: '/',
  },
  {
    icon: 'fa fa-inbox',
    label: 'post',
    separator: true,
    to: '/post',
  },
  {
    icon: 'mdi-account',
    label: 'user',
    separator: true,
    to: '/user',
  },
]
</script>

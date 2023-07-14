<template>
  <div>
    <div class="container mx-auto">
      <div>

        <input
            v-model="state.orgID"
            class="mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
            placeholder="orgid"
        />
        <input
            v-model="state.name"
            class="mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
            placeholder="Name"
        />
        <input
            v-model="state.avatar"
            class="mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"
            placeholder="avator"
        />

        <IgntButton
            style="width: 100%"
            @click="oauth"
        >Oauth
        </IgntButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAddress} from "@/def-composables/useAddress";
import {reactive} from "vue";
import {IgntButton} from "@ignt/vue-library";
import {useClient} from "@/composables/useClient";
import {} from "@/composables/useCometdidDid/index"
import {MsgOauth} from "cometdid-client-ts/cometdid.did/types/cometdid/did/tx";
import {Amount} from "@/utils/interfaces";

const {address} = useAddress();
const client = useClient();

interface State {
  orgID: number;
  name: string;
  avatar: string;
}

const initialState: State = {
  orgID: 1,
  name: "nickname",
  avatar: "avatar.png",
};
const state = reactive(initialState);

const oauth = async (): Promise<void> => {

  let msg:MsgOauth = {
    creator: address.value,
    orgId: state.orgID,
    name: state.name,
    avatar: state.avatar,
    did:"",
  };

  const fee: Array<Amount> = [
    {
      denom: "token",
      amount: "1",
    }
  ];

  client.CometdidDid.tx.sendMsgOauth({
    value: msg,
    // fee: {amount: [], gas: "200000"},
    // memo: ""
  }).then((res)=>{
    debugger;
    console.log(res)
  })
};


const query = async ():Promise<void> =>{

}
</script>

// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";

import { ConsumerState as typeConsumerState} from "./types"
import { UnbondingOpIndex as typeUnbondingOpIndex} from "./types"
import { ValsetUpdateIdToHeight as typeValsetUpdateIdToHeight} from "./types"
import { ConsumerAdditionProposal as typeConsumerAdditionProposal} from "./types"
import { ConsumerRemovalProposal as typeConsumerRemovalProposal} from "./types"
import { Params as typeParams} from "./types"
import { HandshakeMetadata as typeHandshakeMetadata} from "./types"
import { SlashAcks as typeSlashAcks} from "./types"
import { ConsumerAdditionProposals as typeConsumerAdditionProposals} from "./types"
import { ConsumerRemovalProposals as typeConsumerRemovalProposals} from "./types"
import { Chain as typeChain} from "./types"

export {  };



export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						ConsumerState: getStructure(typeConsumerState.fromPartial({})),
						UnbondingOpIndex: getStructure(typeUnbondingOpIndex.fromPartial({})),
						ValsetUpdateIdToHeight: getStructure(typeValsetUpdateIdToHeight.fromPartial({})),
						ConsumerAdditionProposal: getStructure(typeConsumerAdditionProposal.fromPartial({})),
						ConsumerRemovalProposal: getStructure(typeConsumerRemovalProposal.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						HandshakeMetadata: getStructure(typeHandshakeMetadata.fromPartial({})),
						SlashAcks: getStructure(typeSlashAcks.fromPartial({})),
						ConsumerAdditionProposals: getStructure(typeConsumerAdditionProposals.fromPartial({})),
						ConsumerRemovalProposals: getStructure(typeConsumerRemovalProposals.fromPartial({})),
						Chain: getStructure(typeChain.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			InterchainSecurityCcvProviderV1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;
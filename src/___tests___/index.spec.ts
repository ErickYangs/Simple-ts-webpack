import { add } from '../index'
// import { client } from 'ontology-dapi';
// client.registerClient({});
import { Wallet, Identity, Crypto } from 'ontology-ts-sdk'
test('Index add fun', () => {
    const ret = add(1, 2)
    console.log(ret)
    // expect(ret).toBe(3);
    // var wallet = Wallet.create('test');
    // console.log('wallet', wallet)
    const privateKey = Crypto.PrivateKey.random()
    const identity = Identity.create(privateKey, '', '')
    console.log(identity.ontid)
})

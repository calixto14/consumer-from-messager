const { Kafka, Partitioners } = require('kafkajs')
const consume = async()=>{
    console.log("iniciei");
    let kafka = new Kafka({ clientId: 'my-app2', brokers: ['localhost:9092'] })
    let consumer = kafka.consumer({ groupId: 'aesfasfsfsd' })
      await consumer.connect() 
      await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true }) 
     
      await consumer.run({
         eachMessage: async ({ topic, partition, message, heartbeat, pause }:{topic:any, partition:any, message:any, heartbeat:any, pause:any}) => {   
               console.log('recebi uma msg')
               console.log(message.value.toString())
         },
      })
}

consume();
  
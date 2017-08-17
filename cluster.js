var cluster = require('cluster');
if(cluster.isMaster){

    cluster.fork();
    cluster.on('online', function(worker){
        console.log('Worker#')

    })

}
else{


}
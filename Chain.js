class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        
       
        this.Chain = Constraint.create(options);
        World.add(myWorld, this.Chain);
    }
   
   show(){
        
        
     
            var posA = this.Chain.bodyA.position;
            var posB = this.Chain.bodyB.position;
           
                strokeWeight(4);
                line(posA.x , posA.y, posB.x , posB.y);
               
    }
    
}
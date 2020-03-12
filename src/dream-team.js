module.exports = function createDreamTeam( members ) {
  let name= "";
  if(typeof members!="object"||members==null){
    return false;
  }
  for(let i=0;i<members.length; i++){
    
    if(typeof members[i]=="string"){
      members[i] = (members[i].toUpperCase().trim());
      name = name + members[i][0];
    }
  }
  console.log(name);
  return name.split("").sort().join("");
};
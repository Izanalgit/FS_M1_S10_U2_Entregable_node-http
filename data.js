const os = require("node:os");

const user = () => {
    const userObj = {
        name:   os.userInfo().username,
        sist:   os.type(),
        clas:   ()=>{
                        switch (userObj.sist){
                            case "Linux":
                                return "Elegante";
                            case "Darwin":
                                return "GrandThiefKernel"
                            case "Windows_NT":
                                return "Normie"
                            default:
                                return "Anon?"
                        }
                    }
    }
    return userObj; 
}

module.exports={user};

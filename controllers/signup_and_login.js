const { signup } = require("../models");


const signin_Ctlr = async (req, resp) => {
  console.log(req.body, "bodyy");

  let hello;

  hello = await signup.findOne({ where: { Email: req.body.Email } });
  console.log(hello, "hello");

  if (hello) {
    return resp.send(`${req.body.Email} email already exists`);
  }

  if (hello === null) {
    let data = await signup.create({
      Name: req.body.Name,
      Phone: req.body.Phone,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    // await UserDetail.create({
    //   userId: data.id,
    //   phoneNumber: req.body.phoneNumber,
    //   address: req.body.address,
    // });
    //  await data.save();
    console.log(data, "dataa");
    return resp.send({ message: "SCCCESS", data: data });
  }
  // else {
  //   return (
  //     resp.status(400).send(`${req.body.Email} email already exists`),
  //     console.log(`${req.body.Email} email already exists`)
  //   );
  // }
};

  const login_ctrl = async (req, resp) => {
    console.log(req.body);

    if ("Email" in req.body === false) {
      return resp.send("Please enter Email");
    }

    if ("Password" in req.body === false) {
      return resp.send("Please enter Password");
    }

    const user = await signin.findOne({
      where: { Email: req.body.Email, Password: req.body.Password },
    });
    console.log(user, "userrrrrr");

    if (user) {
      return resp.send({ message: "sucesufully login ", sucess: true });
    } else {
      return resp.send({ message: "invalid password ", sucess: false });
    }

 
  };
module.exports = {
  signin_Ctlr,login_ctrl
};

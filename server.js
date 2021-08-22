require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))

// const uri = process.env.URI;
const URL = process.env.NODE_ENV === 'development' ? "http://localhost:5000" : "https://greenlifeafrica.herokuapp.com"
function componentDidMount() {
    axios.get(BACKEND_URL + 'users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({ users: response.data.map(user => user.username), username: response.data[0].username });
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

app.use("/", router);
app.listen(process.env.PORT || 5000, () => console.log("Server Running"));
const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    logger: true,
    debug: true,
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});
router.post("/contact", (req, res) => {
    const fullname = req.body.fullname;
    const subject = req.body.subject;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: fullname,
        to: process.env.HOST_MAIL,
        subject: "Green Life Africa",
        html: ` <div style={justify-content:"center"}> 
        <p> Hi. I am ${fullname} and i have a ${subject} to Green Life Africa.</p>
        <p> My main concern is that ${message}</p>
        <p>Kindly reach out to my email ${email} and get back to me.</p>
        </div>
`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

router.post("/service", (req, res) => {
    const exampleInputName = req.body.exampleInputName;
    const email = req.body.email;
    const mail = {
        from: exampleInputName,
        to: process.env.HOST_MAIL,
        subject: "Green Life Africa",
        html: ` <div style={justify-content:"center"}> 
        <p> Hi. I am ${exampleInputName} and i would like to know more about your service. 
        Get in touch on my email ${email}</p>
        </div>
`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const auth_controller = require("../../controllers/auth-google");
const passport = require("passport");
const app = express();

const auth = require("../../controllers/auth-google");
const router = express.Router();

router.route("/login").post(login);

export default router;

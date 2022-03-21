import createApplication, {Express} from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'

class ExpressMaker {
    app: Express

    constructor() {
        this.app = createApplication()
        this.app.use(helmet())
        this.app.use(cookieParser())
        this.app.use(morgan('tiny'))
        this.app.use(cors())
    }
}

export default  ExpressMaker

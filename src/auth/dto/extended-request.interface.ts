// extended-request.interface.ts
import { Request } from 'express';

interface ExtendedRequest extends Request {
  user?: any; // Adjust the type based on your actual user object
}

export default ExtendedRequest;

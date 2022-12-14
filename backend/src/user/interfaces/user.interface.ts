import { Document } from 'mongoose';

export interface User extends Document {
    fullName: string;
    email: string;
    password: string;
    roles: [string];
    verification: string;
    verified: boolean;
    verificationExpires: Date;
    loginAttempts?: number;
    blockExpires?: Date;
    accountAddress?: string;
    bankAccountName?: string;
    isCreater?: boolean;
    isRequested?: boolean;
    isAccepted?: boolean;
    inviteCode: string;
    socialMedia: string;
    jwtToken: string;
}

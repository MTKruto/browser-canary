import { Api } from "../2_tl.js";
export interface FailedInvitation {
    userId: number;
    premiumRequiredToInvite: boolean;
    premiumRequiredToSendMessage: boolean;
}
export declare function constructFailedInvitation(missingInvitee: Api.MissingInvitee): FailedInvitation;
//# sourceMappingURL=0_failed_invitation.d.ts.map
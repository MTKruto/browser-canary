"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructFailedInvitation = void 0;
function constructFailedInvitation(missingInvitee) {
    return {
        userId: Number(missingInvitee.user_id),
        premiumRequiredToInvite: !!missingInvitee.premium_would_allow_invite,
        premiumRequiredToSendMessage: !!missingInvitee.premium_required_for_pm,
    };
}
exports.constructFailedInvitation = constructFailedInvitation;

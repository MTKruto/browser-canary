export function constructFailedInvitation(missingInvitee) {
    return {
        userId: Number(missingInvitee.user_id),
        premiumRequiredToInvite: !!missingInvitee.premium_would_allow_invite,
        premiumRequiredToSendMessage: !!missingInvitee.premium_required_for_pm,
    };
}

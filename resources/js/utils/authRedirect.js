export function handleAuthRedirect(data) {
    //  Save auth data
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    //  Decide redirect
    let redirectUrl;

    if (data.is_onboarded === true) {
        redirectUrl = '/dashboard';
    } else if (data.is_onboarded === false) {
        redirectUrl = '/onboarding';
    } else {
        //  Fallback 
        console.warn('⚠️ is_onboarded missing in response:', data);
        redirectUrl = '/onboarding';
    }

    console.log('🔍 is_onboarded:', data.is_onboarded);
    console.log('🚀 Redirecting to:', redirectUrl);

    //  Hard redirect 
    window.location.href = redirectUrl;
}
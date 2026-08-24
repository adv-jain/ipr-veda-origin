import { useEffect, useState } from 'react';


export default function useFacebookSDK(appId, apiVersion = 'v22.0') {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        
        if (window.FB) {
            setIsReady(true);
            return;
        }

        window.fbAsyncInit = function () {
            window.FB.init({
                appId,
                cookie: true,
                xfbml: true,
                version: apiVersion,
            });
            setIsReady(true);
        };

        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.async = true;
            script.defer = true;
            script.crossOrigin = 'anonymous';
            document.body.appendChild(script);
        }
    }, [appId, apiVersion]);

    return isReady;
}
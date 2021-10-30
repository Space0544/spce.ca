const SITE_NAME = document.title;
        const TIME = 0.3 * 1000;

        const yield = seconds => new Promise(_ => setTimeout(_, seconds));
        async function init() {
            await yield(TIME * 4);
            for (let s = SITE_NAME.length; s >= 0; s--) {
                let newTitle = SITE_NAME.substr(0, s);
                if (s === 0) newTitle = "_";
                    
                document.title = newTitle;
                await yield(TIME);
            }
            
            await yield(TIME);
            for (let s = 0; s <= SITE_NAME.length; s++) {
                let newTitle = SITE_NAME.substr(0, s);
                if (s === 0) newTitle = "_";
                    
                document.title = newTitle;
                await yield(TIME);
            }

            init();
        }

            init();
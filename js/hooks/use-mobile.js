define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useIsMobile = useIsMobile;
    const MOBILE_BREAKPOINT = 768;
    function useIsMobile() {
        const [isMobile, setIsMobile] = React.useState(undefined);
        React.useEffect(() => {
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = (e) => {
                setIsMobile(e.matches);
            };
            mql.addEventListener("change", onChange);
            onChange(mql);
            return () => mql.removeEventListener("change", onChange);
        }, []);
        return !!isMobile;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLW1vYmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob29rcy91c2UtbW9iaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLGtDQWdCQztJQWxCRCxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztJQUU5QixTQUFnQixXQUFXO1FBQ3pCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FDNUMsU0FBUyxDQUNWLENBQUM7UUFFRixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNuQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsaUJBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQXVDLEVBQUUsRUFBRTtnQkFDM0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNT0JJTEVfQlJFQUtQT0lOVCA9IDc2ODtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzTW9iaWxlKCkge1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4gfCB1bmRlZmluZWQ+KFxuICAgIHVuZGVmaW5lZCxcbiAgKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke01PQklMRV9CUkVBS1BPSU5UIC0gMX1weClgKTtcbiAgICBjb25zdCBvbkNoYW5nZSA9IChlOiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IHwgTWVkaWFRdWVyeUxpc3QpID0+IHtcbiAgICAgIHNldElzTW9iaWxlKGUubWF0Y2hlcyk7XG4gICAgfTtcbiAgICBtcWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBvbkNoYW5nZSk7XG4gICAgb25DaGFuZ2UobXFsKTtcbiAgICByZXR1cm4gKCkgPT4gbXFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuICEhaXNNb2JpbGU7XG59XG4iXX0=
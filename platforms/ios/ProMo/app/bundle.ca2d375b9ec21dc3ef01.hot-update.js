webpackHotUpdate("bundle",{"./login/login-page.xml":function(t,a,o){(function(a){t.exports='<Page class="page" navigatingTo="onNavigatingTo" loaded="onLoaded" navigatedTo="onNavigatedTo" xmlns="http://schemas.nativescript.org/tns.xsd" style="margin-top: 0;">\n    <ScrollView class="login-background">\n        <GridLayout columns="*" rows="*, auto, auto, auto, auto, auto" height="100%" width="100%">\n            <StackLayout row="0" col="0" verticalAlignment="center" horizontalAlignment="center">\n                <Image src="res://login" android:stretch="aspectFill" ios:stretch="none"></Image>\n            </StackLayout>\n            <StackLayout row="1" col="0" orientation="vertical" backgroundColor="#eee" verticalAlignment="bottom" margin="0 10 0 10" borderRadius="5">\n                <StackLayout orientation="horizontal" class="login-field">\n                    <StackLayout width="10%" verticalAlignment="center">\n                        <Image src="res://email" android:stretch="aspectFill" ios:stretch="none"></Image>\n                    </StackLayout>\n                    <StackLayout width="90%" verticalAlignment="center">\n                        <TextField id="email" hint="Email" keyboardType="email" autocorrect="false" autocapitalization="none"\n                            text="{{ email }}" width="100%" textAlignment="left"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row="2" col="0" orientation="vertical" backgroundColor="#eee" verticalAlignment="bottom" margin="5 10 0 10" borderRadius="5">\n                <StackLayout orientation="horizontal" class="login-field">\n                    <StackLayout width="10%" verticalAlignment="center">\n                        <Image src="res://password" android:stretch="aspectFill" ios:stretch="none"></Image>\n                    </StackLayout>\n                    <StackLayout width="90%" verticalAlignment="center">\n                        <TextField id="password" hint="Password" secure="true" autocorrect="false" autocapitalization="none"\n                            text="{{ password }}" width="100%" textAlignment="left"></TextField>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row="3" col="0" orientation="vertical" backgroundColor="#eee" verticalAlignment="bottom" margin="5 10 0 10" borderRadius="5">\n                <StackLayout orientation="horizontal" class="login-field-switch">\n                    <StackLayout width="40%" verticalAlignment="center">\n                        <Label text="Remember Me" horizontalAlignment="left" />\n                    </StackLayout>\n                    <StackLayout width="60%" verticalAlignment="center">\n                        <Switch id="rememberMe" checked="{{ rememberMe }}" horizontalAlignment="right" class="switch" />\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n            <StackLayout row="4" col="0" orientation="vertical" verticalAlignment="top" margin="0 10 0 10">\n                <Button class="login-button" text="Sign In" tap="onSigninButtonTap"></Button>\n            </StackLayout>\n            <StackLayout row="5" col="0" orientation="vertical" verticalAlignment="top" margin="5 10 30 10">\n                <Button class="forgot-button" text="Forgot Password?" tap="onForgotPasswordTap"></Button>\n            </StackLayout>\n            \x3c!-- <Label class="m-t-10 m-b-10 m-l-15 m-r-15" text="Forgot password?" tap="onForgotPasswordTap"></Label> --\x3e\n        </GridLayout>\n    </ScrollView>\n</Page>',a._isModuleLoadedForUI&&a._isModuleLoadedForUI("./login/login-page.xml")&&(t.hot.accept(),t.hot.dispose(()=>{a.hmrRefresh({type:"markup",path:"./login/login-page.xml"})}))}).call(this,o("../node_modules/webpack/buildin/global.js"))}})

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi1wYWdlLnhtbCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZ2xvYmFsIiwiX2lzTW9kdWxlTG9hZGVkRm9yVUkiLCJob3QiLCJhY2NlcHQiLCJkaXNwb3NlIiwiaG1yUmVmcmVzaCIsInR5cGUiLCJwYXRoIl0sIm1hcHBpbmdzIjoiaUZBQ0FBLEVBQU9DLFFBQVUseWdIQUNDQyxFQUFPQyxzQkFBd0JELEVBQU9DLHFCQUFxQiw0QkFFekVILEVBQU9JLElBQUlDLFNBQ1hMLEVBQU9JLElBQUlFLFFBQVEsS0FDZkosRUFBT0ssV0FBVyxDQUFFQyxLQUFNLFNBQVVDLEtBQU0sZ0MiLCJmaWxlIjoiYnVuZGxlLmNhMmQzNzViOWVjMjFkYzNlZjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBjbGFzcz1cXFwicGFnZVxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgbG9hZGVkPVxcXCJvbkxvYWRlZFxcXCIgbmF2aWdhdGVkVG89XFxcIm9uTmF2aWdhdGVkVG9cXFwiIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIHN0eWxlPVxcXCJtYXJnaW4tdG9wOiAwO1xcXCI+XFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJsb2dpbi1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIipcXFwiIHJvd3M9XFxcIiosIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG8sIGF1dG9cXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vbG9naW5cXFwiIGFuZHJvaWQ6c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaW9zOnN0cmV0Y2g9XFxcIm5vbmVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZWVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW49XFxcIjAgMTAgMCAxMFxcXCIgYm9yZGVyUmFkaXVzPVxcXCI1XFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwibG9naW4tZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCIxMCVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcInJlczovL2VtYWlsXFxcIiBhbmRyb2lkOnN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGlvczpzdHJldGNoPVxcXCJub25lXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiOTAlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVxcXCJlbWFpbFxcXCIgaGludD1cXFwiRW1haWxcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCIgYXV0b2NhcGl0YWxpemF0aW9uPVxcXCJub25lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBlbWFpbCB9fVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIHRleHRBbGlnbm1lbnQ9XFxcImxlZnRcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlZWVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIG1hcmdpbj1cXFwiNSAxMCAwIDEwXFxcIiBib3JkZXJSYWRpdXM9XFxcIjVcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJsb2dpbi1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgd2lkdGg9XFxcIjEwJVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwicmVzOi8vcGFzc3dvcmRcXFwiIGFuZHJvaWQ6c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgaW9zOnN0cmV0Y2g9XFxcIm5vbmVcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCI5MCVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XFxcInBhc3N3b3JkXFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvbj1cXFwibm9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgcGFzc3dvcmQgfX1cXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiB0ZXh0QWxpZ25tZW50PVxcXCJsZWZ0XFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZWVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW49XFxcIjUgMTAgMCAxMFxcXCIgYm9yZGVyUmFkaXVzPVxcXCI1XFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiBjbGFzcz1cXFwibG9naW4tZmllbGQtc3dpdGNoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCB3aWR0aD1cXFwiNDAlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUmVtZW1iZXIgTWVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHdpZHRoPVxcXCI2MCVcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggaWQ9XFxcInJlbWVtYmVyTWVcXFwiIGNoZWNrZWQ9XFxcInt7IHJlbWVtYmVyTWUgfX1cXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwic3dpdGNoXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBtYXJnaW49XFxcIjAgMTAgMCAxMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImxvZ2luLWJ1dHRvblxcXCIgdGV4dD1cXFwiU2lnbiBJblxcXCIgdGFwPVxcXCJvblNpZ25pbkJ1dHRvblRhcFxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInRvcFxcXCIgbWFyZ2luPVxcXCI1IDEwIDMwIDEwXFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiZm9yZ290LWJ1dHRvblxcXCIgdGV4dD1cXFwiRm9yZ290IFBhc3N3b3JkP1xcXCIgdGFwPVxcXCJvbkZvcmdvdFBhc3N3b3JkVGFwXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwhLS0gPExhYmVsIGNsYXNzPVxcXCJtLXQtMTAgbS1iLTEwIG0tbC0xNSBtLXItMTVcXFwiIHRleHQ9XFxcIkZvcmdvdCBwYXNzd29yZD9cXFwiIHRhcD1cXFwib25Gb3Jnb3RQYXNzd29yZFRhcFxcXCI+PC9MYWJlbD4gLS0+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbG9naW4vbG9naW4tcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9
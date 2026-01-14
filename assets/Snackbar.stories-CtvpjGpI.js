import{j as t}from"./jsx-runtime-uGtigUhx.js";import{r as c}from"./iframe-CCpZ0RzU.js";import{S as p,n as u}from"./DropzoneFileUpload-B6UIcAcl.js";import"./UnderConstruction-A_PNalYn.js";import{B as _}from"./types-DQfykHh9.js";import"./ButtonGroup-CujBHiIl.js";import"./Chips-DjPG7KFe.js";import"./Text-CGJlnosw.js";import"./IconYoutube-oOrWhdz0.js";import"./IconInfo-DaPyXjYs.js";import"./IconPerson-N3kFoPbx.js";import"./IconUnitsEmployee-CIp6I4TM.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-DqSFy7yo.js";import"./index-31GdvHSE.js";import"./index-DZFHmqbk.js";const F={title:"Snackbar",component:p,argTypes:{type:{options:["information","success","error","warning"],control:{type:"radio"}}}},y=f=>{const[o,r]=c.useState([]),i=e=>{r(s=>s.filter(a=>a.toastId!==e))},l=()=>{const e=new Date().getTime();r(s=>[...s,{type:f.type,toastId:e,message:`${e}`,closeHandler:()=>i(e)}])};return c.useEffect(()=>{if(o.length){const{toastId:e,message:s,type:a}=o[o.length-1];u({text:s,type:a,toastId:e,closeSnackbar:M=>{i(M)}})}},[o]),t.jsx("div",{children:t.jsxs(t.Fragment,{children:[t.jsx(_,{buttonText:"notify",onClick:l}),t.jsx(p,{duration:2e3,position:"bottom-center"})]})})},n=y.bind({});n.args={type:"information"};var m,d,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [infoMessages, setInfoMessages] = useState<any[]>([]);
  const removeMessage = (id: number | string) => {
    setInfoMessages((_infoMessages: any) => _infoMessages.filter((elem: any) => elem.toastId !== id));
  };
  const addMessage = () => {
    const __id = new Date().getTime();
    setInfoMessages((_infoMessages: any) => [..._infoMessages, {
      type: args.type,
      toastId: __id,
      message: \`\${__id}\`,
      closeHandler: () => removeMessage(__id)
    }]);
  };
  useEffect(() => {
    if (infoMessages.length) {
      const {
        toastId,
        message,
        type
      } = infoMessages[infoMessages.length - 1];
      notify({
        text: message,
        type,
        toastId: toastId,
        // actionProps: {
        //   buttonText: 'close',
        //   onClick: () => {
        //     removeMessage(toastId)
        //   }
        // },
        closeSnackbar: _id => {
          removeMessage(_id);
        }
      });
    }
  }, [infoMessages]);
  return <div>
      <>
        <Button buttonText={'notify'} onClick={addMessage} />
        <_Snackbar duration={2000} position="bottom-center" />
      </>
    </div>;
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const O=["Snackbar"];export{n as Snackbar,O as __namedExportsOrder,F as default};

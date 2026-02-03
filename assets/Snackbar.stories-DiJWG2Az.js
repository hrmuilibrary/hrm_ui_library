import{j as n}from"./jsx-runtime-Bx6nDAHA.js";import{r as c}from"./iframe-Djkj-SoK.js";import{B as u}from"./Button-DGtMkrFa.js";import{S as p,n as _}from"./Snackbar-SHxnnzNz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Do9ZPFz0.js";import"./Text-BA3vWX_v.js";import"./helpers-CYPKY3Aw.js";import"./IconDynamicComponent-Dr8dKZi3.js";const E={title:"Snackbar",component:p,argTypes:{type:{options:["information","success","error","warning"],control:{type:"radio"}}}},y=f=>{const[o,r]=c.useState([]),i=e=>{r(s=>s.filter(a=>a.toastId!==e))},l=()=>{const e=new Date().getTime();r(s=>[...s,{type:f.type,toastId:e,message:`${e}`,closeHandler:()=>i(e)}])};return c.useEffect(()=>{if(o.length){const{toastId:e,message:s,type:a}=o[o.length-1];_({text:s,type:a,toastId:e,closeSnackbar:M=>{i(M)}})}},[o]),n.jsx("div",{children:n.jsxs(n.Fragment,{children:[n.jsx(u,{buttonText:"notify",onClick:l}),n.jsx(p,{duration:2e3,position:"bottom-center"})]})})},t=y.bind({});t.args={type:"information"};var d,g,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const w=["Snackbar"];export{t as Snackbar,w as __namedExportsOrder,E as default};

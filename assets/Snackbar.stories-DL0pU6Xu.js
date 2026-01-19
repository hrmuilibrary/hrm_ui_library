import{j as n}from"./Text-D__sJRfZ.js";import{r as c}from"./iframe-C4aqWbSv.js";import{S as p,n as u}from"./DropzoneFileUpload-zeHFHiAK.js";import"./UnderConstruction-Dy_905gT.js";import{B as _}from"./types-DgKGVZOG.js";import"./ButtonGroup-DPNhRfYi.js";import"./Chips-ClRZkzpD.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-Dg27E1n7.js";import"./IconChevronDoubleRight-BZ4yhFAI.js";import"./IconDismissCircleFilled-Cj6hEDzZ.js";import"./index-BWyb6v_r.js";const C={title:"Snackbar",component:p,argTypes:{type:{options:["information","success","error","warning"],control:{type:"radio"}}}},y=f=>{const[o,r]=c.useState([]),i=e=>{r(s=>s.filter(a=>a.toastId!==e))},l=()=>{const e=new Date().getTime();r(s=>[...s,{type:f.type,toastId:e,message:`${e}`,closeHandler:()=>i(e)}])};return c.useEffect(()=>{if(o.length){const{toastId:e,message:s,type:a}=o[o.length-1];u({text:s,type:a,toastId:e,closeSnackbar:M=>{i(M)}})}},[o]),n.jsx("div",{children:n.jsxs(n.Fragment,{children:[n.jsx(_,{buttonText:"notify",onClick:l}),n.jsx(p,{duration:2e3,position:"bottom-center"})]})})},t=y.bind({});t.args={type:"information"};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const $=["Snackbar"];export{t as Snackbar,$ as __namedExportsOrder,C as default};

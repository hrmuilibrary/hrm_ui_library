import{j as e}from"./jsx-runtime-sqNh90S7.js";import{r as c}from"./iframe-DqwhB-1s.js";import{a as k,b as N,c as z,d as $,M as C}from"./Popover-Bf1D5cJ1.js";import{c as b}from"./index-9crLbL5u.js";import"./types-BE9Uy7k4.js";import{B as x}from"./Button-CtEMQjRD.js";import{T as f}from"./Text-CTUlLneT.js";import{r as A}from"./Tooltip-DXgoQNA1.js";import{a as D}from"./IconArrowDownloadFilled-TesKF4L9.js";import{S as B}from"./index-mHKlAvg5.js";import{I as R}from"./IconOpen-fEdHENy0.js";import{S as w}from"./Status-CyuGS3M6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-wOAYRLPb.js";import"./helpers-Xd4iezhJ.js";import"./Link-OYcuBnwy.js";import"./index-Bah4Jefu.js";import"./NestedMenu-7y95EnTp.js";import"./CollapseGroup-DB9THeHG.js";import"./Divider-CJ8o99kf.js";import"./AnimatePresenceWrapper-rgBOQGj1.js";import"./IconChevronDown-DosNe7jO.js";import"./IconChevronUp-CBiTQ3Ew.js";import"./IconChevronRight-DGZUlx_U.js";import"./AvatarGroup-Dma-eqK7.js";import"./DropzoneFileUpload-DnssAilc.js";import"./Label-DKAzlle6.js";import"./useFormProps-BsOYjElj.js";import"./ErrorMessage-Aih1kOmH.js";import"./IconDynamicComponent-Budwiy3b.js";import"./Snackbar-CAlFzXJI.js";import"./Alert-C5In-A8N.js";import"./IconDismissFilled-BWaMZV_z.js";import"./Progress-CPkitKKY.js";import"./IconAdd-puCjffkz.js";import"./Checkbox-D38ZTVIE.js";import"./IconInfo-BOPYyBjF.js";import"./IconCheckmark-YMVFrPAW.js";import"./Empty-Bb_E7Joe.js";import"./Image-CHdpHbG8.js";import"./Input-CGYZwj8Z.js";import"./IconCheckmarkCircleFilled-Cso_Fbxl.js";import"./IconChevronLeft-DkUWM5mu.js";import"./IconCaretDownFilled-Boc3kqda.js";import"./extends-CF3RwP-h.js";import"./Tab-BDcGhMHf.js";import"./Badge-D3fNC1Pr.js";import"./IconMore-DesHfYeJ.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(C,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} headerIcon={<IconOpen />} headerStatus={<Status type="danger" text="Rejected" size="small" withBackground />} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,T,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ee=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ee as __namedExportsOrder,we as default};

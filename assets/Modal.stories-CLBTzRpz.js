import{j as e}from"./jsx-runtime-BtgfURVQ.js";import{r as c}from"./iframe-Dzwn7jFr.js";import{a as k,b as N,c as z,M as _}from"./Popover-pZ77Y-ar.js";import{c as b}from"./index-BSkP1pyL.js";import"./types-XEo9Gk2s.js";import{u as $}from"./useOnOutsideClick-B1t7TlwA.js";import{B as x}from"./Button-DwuE8RYj.js";import{T as f}from"./Text-DlqznRJU.js";import{r as A}from"./Tooltip-BHdDeY2S.js";import{a as D}from"./IconArrowDownloadFilled-Bu0vDxHq.js";import{S as B}from"./index-DacVqsMq.js";import{I as R}from"./IconOpen-CDLajEsb.js";import{S as w}from"./Status-BMhXW3h2.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-ByHcyab1.js";import"./helpers-Jrcu8OdA.js";import"./Link-5B3blEnc.js";import"./index-BI6OO8u8.js";import"./NestedMenu-CHibRbIn.js";import"./CollapseGroup-Dma2IsWa.js";import"./Divider-WOjhnO5d.js";import"./AnimatePresenceWrapper-DWppCfjr.js";import"./IconChevronDown-BXC1Om_h.js";import"./IconChevronUp-DeMTU6ca.js";import"./IconChevronRight-CBf1A1-m.js";import"./AvatarGroup-Cl5ij7KB.js";import"./DropzoneFileUpload-Bzo4Oprx.js";import"./Label-Do6HhDve.js";import"./useFormProps-Uo0oAIx2.js";import"./ErrorMessage-Cv4wEjz1.js";import"./IconDynamicComponent-CIdkvJV_.js";import"./Snackbar-DclGCo1k.js";import"./Alert-yYDVsGOU.js";import"./IconDismissFilled-qMhWnjFZ.js";import"./Progress-CM9FQtsu.js";import"./IconAdd-Jr8g5K7P.js";import"./Checkbox-DAdIYCDX.js";import"./IconInfo-BkG6q60h.js";import"./IconCheckmark-DdECC85B.js";import"./Empty-buRRW3Gf.js";import"./Image-CWEeWQxs.js";import"./Input-CvBeAiws.js";import"./IconCheckmarkCircleFilled-nMLbhk0t.js";import"./IconChevronLeft-BUy4ZmIi.js";import"./IconCaretDownFilled-BJStJNsQ.js";import"./extends-CF3RwP-h.js";import"./Tab-CKc1Aa3M.js";import"./Badge-BPep05h3.js";import"./IconMore-ZDDx14vw.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return $(v,n,O&&t,c.useId()),N(t),z(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Ee={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,j,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const He=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,He as __namedExportsOrder,Ee as default};

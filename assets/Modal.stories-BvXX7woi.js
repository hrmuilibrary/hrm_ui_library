import{j as t}from"./jsx-runtime-jQRlJpq_.js";import{r as c}from"./iframe-IekmBLgU.js";import{a as k,b as N,c as z,M as C}from"./Popover-Dd2cB0Xp.js";import{c as b}from"./index-BOjMRMBe.js";import"./types-Bkil3lR1.js";import{u as B}from"./useOnOutsideClick-DMAjmAhg.js";import{B as x}from"./Button-M3xTZvml.js";import{T as f}from"./Text-DDH3SuXY.js";import{r as $}from"./Tooltip-D1GLgbID.js";import{a as A}from"./IconArrowDownloadFilled-r7HG-K5i.js";import{S as D}from"./index-CIpsf9kH.js";import{I as R}from"./IconOpen-BPEb6APi.js";import{S as w}from"./Status-BXHJ8Avw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-DR6bLB6k.js";import"./helpers-CyjX8nkc.js";import"./Link-DDgCPqn6.js";import"./index-z1LVnpwX.js";import"./NestedMenu-nGLaFoCE.js";import"./CollapseGroup-BpF-GN88.js";import"./Divider-D-fsHD8r.js";import"./AnimatePresenceWrapper-C3yWW4e_.js";import"./IconChevronDown-CI7EmJqt.js";import"./IconChevronUp-Dj6JHzCH.js";import"./IconChevronRight-BQFrXkAz.js";import"./AvatarGroup-CF9IQM0Y.js";import"./DropzoneFileUpload-DOHCrzQo.js";import"./Label-B2H_cz-p.js";import"./useFormProps-Cbvvev0C.js";import"./ErrorMessage-B-5yUWUJ.js";import"./IconDynamicComponent-CGHa6Li-.js";import"./Snackbar-De5mANEK.js";import"./Alert-DGYkq61k.js";import"./IconDismissFilled-Ct90Dzog.js";import"./Progress-CK7h180n.js";import"./IconAdd-B3wwMUKA.js";import"./Checkbox-Cau7Ab4I.js";import"./IconInfo-BT9_gA0R.js";import"./IconCheckmark-BBgK2Qal.js";import"./Empty-Cftb1JKx.js";import"./Image-Bz6aywuE.js";import"./Input-BumMH9FS.js";import"./IconCheckmarkCircleFilled-mtkGZX8B.js";import"./IconChevronLeft-trHiuQ9o.js";import"./IconCaretDownFilled-BJ_qKvUr.js";import"./extends-CF3RwP-h.js";import"./Tab-DLMgZ-gM.js";import"./Badge-9-oc-JKN.js";import"./IconMore-DKWseIV1.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} additionalButton={{
      buttonText: 'danger',
      type: 'danger'
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
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var S,T,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ht=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ht as __namedExportsOrder,Et as default};

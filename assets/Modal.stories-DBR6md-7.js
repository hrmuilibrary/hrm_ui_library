import{j as e}from"./jsx-runtime-nuCDw52l.js";import{r as c}from"./iframe-DvaikATC.js";import{a as k,b as N,c as z,d as $,M as _}from"./Popover-D0Gb-Gaa.js";import{c as b}from"./index-CXIjQS3l.js";import"./types-DZkqWelN.js";import{B as x}from"./Button-Dk_C7-v5.js";import{T as f}from"./Text-DB5RiTxF.js";import{r as A}from"./Tooltip-CQLUbc6z.js";import{a as D}from"./IconArrowDownloadFilled-n3j8NdV6.js";import{S as B}from"./index-BMBlijSv.js";import{I as R}from"./IconOpen-CwFizIRB.js";import{S as w}from"./Status-D5sdCqoy.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-Dhj1i8r-.js";import"./helpers-BEm6AbwL.js";import"./Link-BiwV2UJL.js";import"./index-1pWFmpdE.js";import"./NestedMenu-DUTRDmC0.js";import"./CollapseGroup-BsxB5aEP.js";import"./Divider-w9W3ieL6.js";import"./AnimatePresenceWrapper-qXYVWP54.js";import"./IconChevronDown-CpPSJmdg.js";import"./IconChevronUp-Clq1YRwF.js";import"./IconChevronRight-DvIuXvGo.js";import"./AvatarGroup-CplLD7GB.js";import"./DropzoneFileUpload-D4yG7v6V.js";import"./Label-C4okipqK.js";import"./useFormProps-CFyMqcT3.js";import"./ErrorMessage-VJ0jEVqV.js";import"./IconDynamicComponent-Cmn2_7yz.js";import"./Snackbar-DcZijcY7.js";import"./Alert-uBbjXEhi.js";import"./IconDismissFilled-WyGuil91.js";import"./Progress-DsHGZK68.js";import"./IconAdd-BtgQ62Gi.js";import"./Checkbox-DNqF5ghX.js";import"./IconInfo-CFnxkYm5.js";import"./IconCheckmark-DRfUx13r.js";import"./Empty-D_jfXuNq.js";import"./Image-CCxfgtP9.js";import"./Input-DElOWCzV.js";import"./IconCheckmarkCircleFilled-DD9Ku2Kg.js";import"./IconChevronLeft-sZoNzwH9.js";import"./IconCaretDownFilled-3FCPLBkK.js";import"./extends-CF3RwP-h.js";import"./Tab-DEO95iFO.js";import"./Badge-sHxIuWoW.js";import"./IconMore-Be9IttmC.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const Ee=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ee as __namedExportsOrder,we as default};

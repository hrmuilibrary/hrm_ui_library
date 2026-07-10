import{j as o}from"./jsx-runtime-BarBKLmL.js";import{r as c}from"./iframe-BwLkT-HM.js";import{a as k,b as N,c as $,d as z,M as g}from"./Popover-CaVe17ta.js";import{c as b}from"./index-BWpdNhGt.js";import"./types-Dfy1ZLP3.js";import{B as x}from"./Button-B1KYsLoT.js";import{T as f}from"./Text-y-nRn9Q2.js";import{r as A}from"./Tooltip-CIqc5Yzv.js";import{a as D}from"./IconArrowDownloadFilled-9whweL6p.js";import{S as E}from"./index-kgsE_Sxk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BqNIMBoF.js";import"./helpers-BVTy3eVf.js";import"./Link-BRUCOZ7Z.js";import"./index-CDBNu5nr.js";import"./NestedMenu-DInhROTj.js";import"./CollapseGroup-FRI7LahF.js";import"./Divider-Bmw9MxHR.js";import"./AnimatePresenceWrapper-DBxYXuBO.js";import"./IconChevronDown-CvausEjt.js";import"./IconChevronUp-DleAzzqn.js";import"./IconChevronRight-BFvWeYcm.js";import"./AvatarGroup-DNEna9Je.js";import"./DropzoneFileUpload-4GLdzXhv.js";import"./Label-6xyH2ZSM.js";import"./useFormProps-C9SN7rJ3.js";import"./ErrorMessage-nGEJKivg.js";import"./IconDynamicComponent-C6J9ZmZS.js";import"./Snackbar-ejSYHirg.js";import"./Alert-CEY1p4aO.js";import"./IconDismissFilled-B_NHnzPT.js";import"./Progress-KN4pf4L-.js";import"./IconAdd-CEZYyGG0.js";import"./Checkbox-rdO_J5C6.js";import"./IconInfo-XC7Xv-dl.js";import"./IconCheckmark-Bu-A4eee.js";import"./Empty-X_bcgL0n.js";import"./Image-4xDzhsIm.js";import"./Input-BF43iU79.js";import"./IconCheckmarkCircleFilled-BH9HcxuQ.js";import"./IconChevronLeft-DGjc-lE7.js";import"./IconCaretDownFilled-DbuRQU7I.js";import"./extends-CF3RwP-h.js";import"./Tab-CbGRn127.js";import"./Badge-GuqHyQWK.js";import"./IconMore-C_Fj6MxH.js";const B=({isOpen:e,onClose:n,onSubmit:s,title:t,className:i="",size:j="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:v}=k({isOpen:e,enterDuration:400,exitDuration:200}),[y,I]=c.useState(null);return N(y,n,O&&e,c.useId()),$(e),z(n,{enabled:e}),v?A.createPortal(o.jsx("div",{className:b("modal modal--confirmation",`modal--${j}`,`modal--${u}`,i),children:o.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:o.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?o.jsx("div",{className:"modal__icon mb-32",children:o.jsx(m.Component,{size:"xlarge"})}):null,t?o.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:t}):null,d?o.jsx(f,{className:"mt-12",children:d}):null,p?o.jsxs("div",{className:"modal__footer mt-32",children:[o.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),o.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Do={title:"Modal",component:g,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},R=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],w=e=>{const[n,s]=c.useState(!1),t=()=>s(!1),i=()=>s(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:i,children:"click here "}),o.jsx(g,{...e,titleSize:"medium",onClose:t,isOpen:n,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(E,{options:R})})})]})},l=w.bind({});l.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const H=e=>{const[n,s]=c.useState(!1),t=()=>s(!1),i=()=>s(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:i,children:"click here "}),o.jsx(B,{...e,iconProps:{Component:D},onClose:t,isOpen:n,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},a=H.bind({});a.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var M,h,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
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
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var C,_,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(S=(_=a.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const Eo=["Modal","ModalConfirmation"];export{l as Modal,a as ModalConfirmation,Eo as __namedExportsOrder,Do as default};

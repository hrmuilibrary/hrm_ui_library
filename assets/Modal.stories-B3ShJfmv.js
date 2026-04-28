import{j as o}from"./jsx-runtime-7fv8tTCu.js";import{r as c}from"./iframe-oEyWxzg1.js";import{a as k,b as N,c as $,d as z,M as g}from"./Popover-wWKF_mxV.js";import{c as b}from"./index-t9KkYCCn.js";import"./types-C2SQmyRo.js";import{B as x}from"./Button-DCIifd0y.js";import{T as f}from"./Text-DJmOglTz.js";import{r as A}from"./Tooltip-_Zz-xtem.js";import{a as D}from"./IconArrowDownloadFilled-AoUtUtlQ.js";import{S as E}from"./index-CahfGSOm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BsTCjBSz.js";import"./helpers-ucB5S7R7.js";import"./Link-DpXlMkSM.js";import"./index-BsrSMMhx.js";import"./NestedMenu-B-PxUjtu.js";import"./CollapseGroup-D90ESKEP.js";import"./Divider-D7o2eEEt.js";import"./AnimatePresenceWrapper-2vKEIs8V.js";import"./IconChevronDown-Gx8YdzV_.js";import"./IconChevronUp-BkDJOeCk.js";import"./IconChevronRight-7SRJhN_-.js";import"./AvatarGroup-CQ_GLjJ3.js";import"./DropzoneFileUpload-CdrNngJG.js";import"./Label-CXxYW_mV.js";import"./useFormProps-CB6AZEiI.js";import"./ErrorMessage-9za0kocV.js";import"./IconDynamicComponent-BS7pgqm8.js";import"./Snackbar-CejxDGQg.js";import"./Alert-BX6OI66G.js";import"./IconDismissFilled-DmyBLJnu.js";import"./Progress-Cy3eQ-Q_.js";import"./IconAdd-Bo9tiKXs.js";import"./Checkbox-CA6xSOpQ.js";import"./IconInfo-B0BKhnjd.js";import"./IconCheckmark-pvUq4jT3.js";import"./Empty-B68YRa9G.js";import"./Image-C5Y4kr_x.js";import"./Input-DDWTQbei.js";import"./IconCheckmarkCircleFilled-BEAvvmsR.js";import"./IconChevronLeft-BE_QR8O2.js";import"./IconCaretDownFilled-CtW-Hqr4.js";import"./extends-CF3RwP-h.js";import"./Tab-7ZBLL1PZ.js";import"./Badge-DF2676mr.js";import"./IconMore-BXhVvOJM.js";const B=({isOpen:e,onClose:n,onSubmit:s,title:t,className:i="",size:j="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:v}=k({isOpen:e,enterDuration:400,exitDuration:200}),[y,I]=c.useState(null);return N(y,n,O&&e,c.useId()),$(e),z(n,{enabled:e}),v?A.createPortal(o.jsx("div",{className:b("modal modal--confirmation",`modal--${j}`,`modal--${u}`,i),children:o.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:o.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?o.jsx("div",{className:"modal__icon mb-32",children:o.jsx(m.Component,{size:"xlarge"})}):null,t?o.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:t}):null,d?o.jsx(f,{className:"mt-12",children:d}):null,p?o.jsxs("div",{className:"modal__footer mt-32",children:[o.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),o.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Do={title:"Modal",component:g,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},R=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],w=e=>{const[n,s]=c.useState(!1),t=()=>s(!1),i=()=>s(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:i,children:"click here "}),o.jsx(g,{...e,titleSize:"medium",onClose:t,isOpen:n,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(E,{options:R})})})]})},l=w.bind({});l.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const H=e=>{const[n,s]=c.useState(!1),t=()=>s(!1),i=()=>s(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:i,children:"click here "}),o.jsx(B,{...e,iconProps:{Component:D},onClose:t,isOpen:n,onSubmit:()=>{t(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},a=H.bind({});a.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var M,h,T;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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

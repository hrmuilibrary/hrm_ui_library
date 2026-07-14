import{j as e}from"./jsx-runtime-B7SU4NzS.js";import{r as c}from"./iframe-BiiXUHFP.js";import{a as k,b as N,c as z,d as $,M as C}from"./Popover-Al0Y9BwC.js";import{c as b}from"./index-BMnlszqU.js";import"./types-C0-R_ZNE.js";import{B as x}from"./Button-DMlVNJTd.js";import{T as f}from"./Text-BMhshnkU.js";import{r as A}from"./Tooltip-DKFGlf6d.js";import{a as D}from"./IconArrowDownloadFilled-wkXiOTT1.js";import{S as B}from"./index-o7_ZFrxx.js";import{I as R}from"./IconOpen-Dlvrdmi7.js";import{S as w}from"./Status-Ca-IQpZw.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-VXIrvDzc.js";import"./helpers-LcuiYgGm.js";import"./Link-SgmEwoJ6.js";import"./index-BmVcHfyF.js";import"./NestedMenu-BCtKs04T.js";import"./CollapseGroup-Dr0r3X_H.js";import"./Divider-B-f5_zaU.js";import"./AnimatePresenceWrapper-cyjPmGwF.js";import"./IconChevronDown-oGpNY4pw.js";import"./IconChevronUp-DOdCw-kf.js";import"./IconChevronRight-B37MiQmd.js";import"./AvatarGroup-D9UVGH71.js";import"./DropzoneFileUpload-DDWq-h-0.js";import"./Label-DVWp-Zhs.js";import"./useFormProps-DQNISqCc.js";import"./ErrorMessage-BM6vMfsI.js";import"./IconDynamicComponent-TMfWqvO_.js";import"./Snackbar-Cfb45o_1.js";import"./Alert-B4QX6t1g.js";import"./IconDismissFilled-Dmkc5bxO.js";import"./Progress-HlxbfBcr.js";import"./IconAdd-CrbQt5CL.js";import"./Checkbox-AcI-oX4a.js";import"./IconInfo-BpUPZXPi.js";import"./IconCheckmark-C3tXv74f.js";import"./Empty-DiZBx0Qw.js";import"./Image-DoCZTVV2.js";import"./Input-DjmbC4bo.js";import"./IconCheckmarkCircleFilled-RLsvxkdg.js";import"./IconChevronLeft-C3TFCAe4.js";import"./IconCaretDownFilled-DHye68BW.js";import"./extends-CF3RwP-h.js";import"./Tab-DrxOoolb.js";import"./Badge-D1SbDQiV.js";import"./IconMore-BryqfRLZ.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(C,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

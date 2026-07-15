import{j as e}from"./jsx-runtime-BNdl7zfN.js";import{r as c}from"./iframe-DdJqbjP1.js";import{a as k,b as N,c as z,d as $,M as _}from"./Popover-C12aqYBI.js";import{c as b}from"./index-C2AFq9e_.js";import"./types-CkOs2gdt.js";import{B as x}from"./Button-DliJ8OC0.js";import{T as f}from"./Text-l0k1Tvx0.js";import{r as A}from"./Tooltip-B0Q1rQC3.js";import{a as D}from"./IconArrowDownloadFilled-CxFYskTO.js";import{S as B}from"./index-CTFJn_UX.js";import{I as R}from"./IconOpen-DfwBjxqt.js";import{S as w}from"./Status-EJ0tuKiY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BgUVP6Jy.js";import"./helpers-tWzEQIDg.js";import"./Link-D8SSI2hV.js";import"./index-BE5nffgT.js";import"./NestedMenu-qMGeNpix.js";import"./CollapseGroup-DwNFbV0s.js";import"./Divider-DGepxJFm.js";import"./AnimatePresenceWrapper-CxjToRxe.js";import"./IconChevronDown-Bfi19NvM.js";import"./IconChevronUp-Qc5EZnnx.js";import"./IconChevronRight-CGCk-H8F.js";import"./AvatarGroup-PGQr7fKO.js";import"./DropzoneFileUpload-DLBio7Dy.js";import"./Label-DIfOdbcI.js";import"./useFormProps-BgdzgCv-.js";import"./ErrorMessage-s6A2AuYI.js";import"./IconDynamicComponent-Bm4JBm7i.js";import"./Snackbar-eqoFlXlB.js";import"./Alert-BAf-gFay.js";import"./IconDismissFilled-BDoyi3mk.js";import"./Progress-zUtMZZN0.js";import"./IconAdd-BQCvNBqL.js";import"./Checkbox-9VOKKy9q.js";import"./IconInfo-DArYuN7y.js";import"./IconCheckmark-D1idmFI_.js";import"./Empty-BHsKBanT.js";import"./Image-C5KBwOGa.js";import"./Input-DPo1YsPq.js";import"./IconCheckmarkCircleFilled-D679jDml.js";import"./IconChevronLeft-DqTwOQH7.js";import"./IconCaretDownFilled-DQZpVS72.js";import"./extends-CF3RwP-h.js";import"./Tab-DGDWksKM.js";import"./Badge-C9jtpKdG.js";import"./IconMore-CUUWmYkQ.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return N(v,n,O&&t,c.useId()),z(t),$(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},we={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

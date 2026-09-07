import{j as t}from"./jsx-runtime-B0b0QkDi.js";import{r as c}from"./iframe-BFHg0vP5.js";import{a as k,b as N,c as z,M as C}from"./Popover-BPB-rrlv.js";import{c as b}from"./index-CwJlQUNM.js";import"./types-B59vX58w.js";import{u as B}from"./useOnOutsideClick-DtQuuATV.js";import{B as x}from"./Button-1m6dLyK7.js";import{T as f}from"./Text-Bo5RN8nY.js";import{r as $}from"./Tooltip-BvxIvH0c.js";import{a as A}from"./IconArrowDownloadFilled-Ddo1ehkA.js";import{S as D}from"./index-M29LhcSV.js";import{I as R}from"./IconOpen-B9X-SLh0.js";import{S as w}from"./Status-DKulCLzJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-CWA1raQE.js";import"./helpers-DSVtpnDC.js";import"./Link-P5GzqX_I.js";import"./index-v3STkguG.js";import"./NestedMenu-B_4F0Q00.js";import"./CollapseGroup-DjXWV8Hs.js";import"./Divider-BpnkrB52.js";import"./AnimatePresenceWrapper-BTT2CzII.js";import"./IconChevronDown-C1u5HczF.js";import"./IconChevronUp-CvKX9FeM.js";import"./IconChevronRight-rlfHypmu.js";import"./AvatarGroup-BPzmkdqQ.js";import"./DropzoneFileUpload-BcOKGNr4.js";import"./Label-Do7OgWzo.js";import"./useFormProps-CQ-ti30j.js";import"./ErrorMessage-CK_thhKR.js";import"./IconDynamicComponent-D-EMrMHu.js";import"./Snackbar-BuacAPu9.js";import"./Alert-BcGPSb4e.js";import"./IconDismissFilled-MUjCXSwV.js";import"./Progress-BOtxgKRy.js";import"./IconAdd-9L8G7vSF.js";import"./Checkbox-CS4MHOgz.js";import"./IconInfo-BJmG1AUd.js";import"./IconCheckmark-DxqbcmwY.js";import"./Empty-pWxV5cPQ.js";import"./Image-BNSe4AOa.js";import"./Input-DlWrvQ34.js";import"./IconCheckmarkCircleFilled-5d4foe8u.js";import"./IconChevronLeft-DT66GjUn.js";import"./IconCaretDownFilled-HQxDOhV7.js";import"./extends-CF3RwP-h.js";import"./Tab-BNQb7n2i.js";import"./Badge-B3eNvXIf.js";import"./IconMore-BYFYPCS8.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

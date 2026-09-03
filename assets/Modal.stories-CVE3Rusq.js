import{j as t}from"./jsx-runtime-CixmCXYB.js";import{r as c}from"./iframe-CdU7qALN.js";import{a as k,b as N,c as z,M as C}from"./Popover-By9dlQl6.js";import{c as b}from"./index-DE9b-KKH.js";import"./types-BbW1ZtY6.js";import{u as B}from"./useOnOutsideClick-Ih5BL_8Y.js";import{B as x}from"./Button-DfJvPqhN.js";import{T as f}from"./Text-My9GXrOB.js";import{r as $}from"./Tooltip-DTziODZP.js";import{a as A}from"./IconArrowDownloadFilled-CG65Mw_H.js";import{S as D}from"./index-CuxPMdGS.js";import{I as R}from"./IconOpen-DqMI3Xrc.js";import{S as w}from"./Status-DQuPvl4j.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BnCR8okq.js";import"./helpers-Bn2gO0KC.js";import"./Link-B6-6snZI.js";import"./index-DhXq4NVr.js";import"./NestedMenu-DNbfEsCP.js";import"./CollapseGroup-T6JVEMQ7.js";import"./Divider-DHBpIwQY.js";import"./AnimatePresenceWrapper-BeJlosC2.js";import"./IconChevronDown-xHZJGxLN.js";import"./IconChevronUp-DKo6nSmU.js";import"./IconChevronRight-Cm5n-qKA.js";import"./AvatarGroup-ChZTAl22.js";import"./DropzoneFileUpload-Cvr_RKU5.js";import"./Label-CUSgKQks.js";import"./useFormProps-DeoeMsol.js";import"./ErrorMessage-DGKMssSp.js";import"./IconDynamicComponent-DBtKiA4p.js";import"./Snackbar-BeqPvJAV.js";import"./Alert-C_R_-qNx.js";import"./IconDismissFilled-D1ciZdNY.js";import"./Progress-BoGqKv8q.js";import"./IconAdd-DvJuCMpJ.js";import"./Checkbox-BK2EqvJZ.js";import"./IconInfo-Cq7cvRQG.js";import"./IconCheckmark-D82v9nmd.js";import"./Empty-D7DX9K0a.js";import"./Image-CuMPHADR.js";import"./Input-hMI3BL-k.js";import"./IconCheckmarkCircleFilled-DM7PpGXW.js";import"./IconChevronLeft-CknnmmTp.js";import"./IconCaretDownFilled-Der-bUAb.js";import"./extends-CF3RwP-h.js";import"./Tab-B_tg2vLU.js";import"./Badge-al8HLB2w.js";import"./IconMore-ClrWipaL.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

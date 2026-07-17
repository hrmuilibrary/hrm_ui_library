import{j as e}from"./jsx-runtime-BQ8XKDWZ.js";import{r as c}from"./iframe-DuzJ3-xf.js";import{a as k,b as N,c as z,M as _}from"./Popover-CQTjngkz.js";import{c as b}from"./index-BXUB3CAz.js";import"./types-3LfPC6TZ.js";import{u as $}from"./useOnOutsideClick-DwyUj8qM.js";import{B as x}from"./Button-DsWIgKwr.js";import{T as f}from"./Text-pLVOucf6.js";import{r as A}from"./Tooltip-Bp9DWzwB.js";import{a as D}from"./IconArrowDownloadFilled-DU71WUq-.js";import{S as B}from"./index-D5YWre8t.js";import{I as R}from"./IconOpen-DTvYhjUi.js";import{S as w}from"./Status-D-Vxs_KV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-Ceoj2xTf.js";import"./helpers-CH0y8nQM.js";import"./Link-CxigbnfV.js";import"./index-BoNFqYXL.js";import"./NestedMenu-B3f0TTxp.js";import"./CollapseGroup-DXk9mGz-.js";import"./Divider-BWERKW5b.js";import"./AnimatePresenceWrapper-BffjZJ1d.js";import"./IconChevronDown-DrlTxOME.js";import"./IconChevronUp-SqrhYKWN.js";import"./IconChevronRight-DYe2eMk9.js";import"./AvatarGroup-C8tvysow.js";import"./DropzoneFileUpload-BlC4d78K.js";import"./Label-DQSMISYM.js";import"./useFormProps-DIvwJoaV.js";import"./ErrorMessage-C5HC5Vf_.js";import"./IconDynamicComponent-Dk4FBIIr.js";import"./Snackbar-CkI-3z82.js";import"./Alert-By5cvU4a.js";import"./IconDismissFilled-Mm6VXrZ1.js";import"./Progress-_ekFhkAr.js";import"./IconAdd-CoH_JCxp.js";import"./Checkbox-DtqaWqoG.js";import"./IconInfo-BaYuM2sj.js";import"./IconCheckmark-CfdrAkp2.js";import"./Empty-Ddkzuy2E.js";import"./Image-BMFaJR4H.js";import"./Input-DO9B7b5M.js";import"./IconCheckmarkCircleFilled-vhCnGYex.js";import"./IconChevronLeft-B9ioQ9eO.js";import"./IconCaretDownFilled-Co6we-35.js";import"./extends-CF3RwP-h.js";import"./Tab-C10rILsw.js";import"./Badge-B82unf5K.js";import"./IconMore-DXKg6SNE.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return $(v,n,O&&t,c.useId()),N(t),z(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Ee={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

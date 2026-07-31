import{j as e}from"./jsx-runtime-SbcHhCkt.js";import{r as c}from"./iframe-Bgel0fic.js";import{a as k,b as N,c as z,M as _}from"./Popover-DD8su1xC.js";import{c as b}from"./index-CUaafn95.js";import"./types-DyFBYxib.js";import{u as $}from"./useOnOutsideClick-C4DFK_Rl.js";import{B as x}from"./Button-BGu00P_f.js";import{T as f}from"./Text-q0y3Ugtx.js";import{r as A}from"./Tooltip-CakgRycE.js";import{a as D}from"./IconArrowDownloadFilled-B-yZ2LoB.js";import{S as B}from"./index-lt9NAUwH.js";import{I as R}from"./IconOpen-BGEbNpbT.js";import{S as w}from"./Status-DF7wUfId.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-BaS8VnQ4.js";import"./helpers-BU9J2je4.js";import"./Link-DCKG2QZi.js";import"./index-D0MkiU4T.js";import"./NestedMenu-Bmrk1EfX.js";import"./CollapseGroup-DQpYwvbH.js";import"./Divider-C6I21I-7.js";import"./AnimatePresenceWrapper-B86oRYgn.js";import"./IconChevronDown-Be_CBxOL.js";import"./IconChevronUp-BZivsslU.js";import"./IconChevronRight-UX1LUfFc.js";import"./AvatarGroup-DnWWAT1O.js";import"./DropzoneFileUpload-MjzVIVVY.js";import"./Label-Dv42gwgl.js";import"./useFormProps-CJCsrNRZ.js";import"./ErrorMessage-GCBX73zC.js";import"./IconDynamicComponent-CfloZ5Ca.js";import"./Snackbar-Ds06ZvPY.js";import"./Alert-CIJ-9NHS.js";import"./IconDismissFilled-D0BF8xvg.js";import"./Progress-CaC0wUB5.js";import"./IconAdd-BnSB7egK.js";import"./Checkbox-ClRQnByI.js";import"./IconInfo-BTXcwiel.js";import"./IconCheckmark-4ROx5Tzb.js";import"./Empty-BSfaPXZh.js";import"./Image-BCpsXWGJ.js";import"./Input-BxjZMFw-.js";import"./IconCheckmarkCircleFilled-htYO6uQe.js";import"./IconChevronLeft-C5IdOBdt.js";import"./IconCaretDownFilled-Xlq5Pv5q.js";import"./extends-CF3RwP-h.js";import"./Tab-BneLxM2d.js";import"./Badge-CkZguzca.js";import"./IconMore-xN6Xq3Tv.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return $(v,n,O&&t,c.useId()),N(t),z(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Ee={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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

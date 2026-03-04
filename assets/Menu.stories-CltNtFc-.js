import{j as e}from"./jsx-runtime-B_KvGkvl.js";import{r as i}from"./iframe-D5psIR2j.js";import{M as C,N as I}from"./NestedMenu-Dtk99lUY.js";import{B as b}from"./Button-B6l7szoO.js";import{I as y}from"./IconArrowDownloadFilled-Bsa16nhO.js";import{I as g,a as h,b as x}from"./IconBeach-E_UTLTiC.js";import{I as M}from"./IconMore-CsBmMbao.js";import{I as O}from"./IconCheckmark-gEJ3rdS7.js";import{I as n}from"./IconSettings-BXlhsM3c.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-D9tmDtSL.js";import"./index-SeRZCanj.js";import"./Text-BWATkKcH.js";import"./helpers-DR0AIT_T.js";import"./index-DYDl_GcV.js";import"./types-CWEngvRd.js";import"./Popover-BLQy0uOY.js";import"./IconDismiss-SfonZfrZ.js";import"./Link-Bfxw35Q_.js";import"./index-C27Cok3R.js";import"./CollapseGroup-BmOjcway.js";import"./Divider-B3K75htE.js";import"./AnimatePresenceWrapper-BXSe0GdG.js";import"./IconChevronDown-bIW8t8fI.js";import"./IconChevronUp-Bdnnmoo8.js";import"./IconChevronRight-CqPh29EA.js";import"./AvatarGroup-CNKCzdwd.js";import"./DropzoneFileUpload-BN1FlKaZ.js";import"./Label-CJanzy0l.js";import"./useFormProps-rcwbPJ8V.js";import"./ErrorMessage-DMgiPsWg.js";import"./IconDynamicComponent-D1NB5x-a.js";import"./Snackbar-sZ4mN64Z.js";import"./Alert-Bd8NKon-.js";import"./IconDismissFilled-cpgvoD_-.js";import"./Progress-xAMX639z.js";import"./IconAdd-Cum6xqhF.js";import"./Checkbox-BANP1oD7.js";import"./IconInfo-uhsZKdbA.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};

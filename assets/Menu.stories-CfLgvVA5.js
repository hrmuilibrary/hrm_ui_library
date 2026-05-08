import{j as e}from"./jsx-runtime-Bw66X12A.js";import{r as i}from"./iframe-CeX1-gjJ.js";import{M as C,N as I}from"./NestedMenu-CuODW5CU.js";import{B as b}from"./Button-CW6ry4S_.js";import{I as y}from"./IconArrowDownloadFilled-rmXz1br_.js";import{I as g,a as h,b as x}from"./IconBeach-BG2WAgyI.js";import{I as M}from"./IconMore-B1y7t-G_.js";import{I as O}from"./IconCheckmark-CMeFtU5O.js";import{I as n}from"./IconSettings-CqlBzJWr.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-nUoB77zM.js";import"./index-BD__mcW0.js";import"./Text-CstLxQu3.js";import"./helpers-Dz9wASXy.js";import"./index-AboGxAif.js";import"./types-D6LX7z9i.js";import"./index-CWD8RMh7.js";import"./Popover-BwBJuNOg.js";import"./IconDismiss-D6pj47JF.js";import"./Link-Tab_qrHm.js";import"./CollapseGroup-DATBfRXr.js";import"./Divider-EubTqCwd.js";import"./AnimatePresenceWrapper-BbKzVf1u.js";import"./IconChevronDown-B47JQRSI.js";import"./IconChevronUp-BC1XF4nX.js";import"./IconChevronRight-BTxZXcrz.js";import"./AvatarGroup-C83vJpfX.js";import"./DropzoneFileUpload-CIVOohSd.js";import"./Label-C4wSnlQB.js";import"./useFormProps-DTj8k7uz.js";import"./ErrorMessage-6KEYMnYm.js";import"./IconDynamicComponent-D1dh44tt.js";import"./Snackbar-BUdbAoqh.js";import"./Alert-BxVxLQk2.js";import"./IconDismissFilled-lbTNwGqF.js";import"./Progress-y_QSD__w.js";import"./IconAdd-CsXyHluh.js";import"./Checkbox-CH8EaVi9.js";import"./IconInfo-GzfDEuyh.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
